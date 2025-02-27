
export type Post = {
    id: number;
    title: string;
    body: string;
}

export type CreatePost = {
    posts: Post[];
    create: (posts: Post) => void;
}

export type PostListProps = {
    posts: Post [];
    remove: (id: number) => void;
}

export type SinglePost = {
    post: Post;
    remove: (id: number) => void;
}

export type SortingList = { 
    posts: Post[];

    setFilter: (filter: {sort: string, query: string}) => void;
    filter: {sort: string, query: string};
}

export type MySelect = {
    DefaultValue?: string;
    options?: {value: string, name: string}[];
    value?: string;
    onChange?: (e: string) => void; 
}

export type MyModalWindow = {
    children: React.ReactNode;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

export type SortPosts = {
    posts: Post[], 
    filter: { sort: string; query: string }
}

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;


export type PaginationProps = {
    page: number;
    pages_button: number[];
    setPage: (page: number) => void;
}

export type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
    postId: number;
}

export type ObserverType = {
    ref: React.RefObject<HTMLDivElement>;
    canLoad: boolean;
    isLoading: boolean;
    callback: () => void;
}