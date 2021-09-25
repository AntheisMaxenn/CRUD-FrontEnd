export interface User {
        id: string;
        token: string;
}

export interface UserInfo {
        id: string,
        firstName: string,
        lastName: string
}

export interface SendPost {
        id: string;
        content: string;
        public: boolean
}

export interface Post {
        id: string;
        postID: number;
        content: string;
        public: boolean;
}