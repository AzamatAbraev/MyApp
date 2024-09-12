interface Reactions {
  likes: number;
  dislikes: number;
}

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export default Post;
