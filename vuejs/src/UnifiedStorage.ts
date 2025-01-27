/*
UnifiedStorage
==============
File storage
*/
export const FileType = [
	'FILE',
	'FOLDER'
] as const;

export type TFileType = typeof FileType[number];

export const PermissionRole = [
	'OWNER',
	'READ',
	'WRITE'
] as const;

export type TPermissionRole = typeof PermissionRole[number];

export interface IStorageFile {
	id?: string;
	created_at?: string | Date | number;
	updated_at?: string | Date | number;
	name: string;
	description?: string;
	parent_id?: string;
	user_id?: string;
	size?: number;
	type: TFileType;
	mime_type?: string;
	permissions?: IStoragePermission[];
	download_url?: string; // This link expires after 1 hour. When you need to retrieve the contents of a file, call the "Retrieve a file" endpoint again to get a new download_url.
	hash?: string;
	data?: string; // base64 encoded file contents used to create/update only
	version?: string;
	web_url?: string;
	raw?: unknown;
}

export interface IStoragePermission {
	user_id?: string;
	group_id?: string;
	roles: ( TPermissionRole )[];
	is_hidden?: boolean;
	is_public?: boolean;
}
