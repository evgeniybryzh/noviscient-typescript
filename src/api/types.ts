export interface PostType {
  userId: number;
  id: number;
  title?: string;
  body?: string;
}

export interface CommentType {
  postId: number;
  id: number;
  name?: string;
  email?: string;
  body?: string;
}

export interface AlbumType {
  userId: number;
  id: number;
  title?: number;
}

export interface TodoType {
  userId: number;
  id: number;
  title?: string;
  completed?: boolean;
}

export interface PhotoType {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface UserType {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}
