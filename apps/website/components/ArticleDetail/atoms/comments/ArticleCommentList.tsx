
import React from 'react';
import { CommentItem } from 'shared';
import { ArticleCommentItem } from './ArticleCommentItem';

interface ListProps {
  comments: CommentItem[];
}

export const ArticleCommentList: React.FC<ListProps> = ({ comments }) => {
  return (
    <div className="space-y-6 mb-12 mt-8">
      {comments.map((comment) => (
        <ArticleCommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
