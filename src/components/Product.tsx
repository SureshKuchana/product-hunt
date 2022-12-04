import { Products } from '../types';

type ProductProps = Products & {
  upVote: (productId: number) => void;
};

const Product = ({
  id,
  title,
  description,
  url,
  votes,
  submitterAvatarUrl,
  productImageUrl,
  upVote,
}: ProductProps) => {
  const handleUpVote = () => {
    upVote(id);
  };

  return (
    <div key={id} className="item">
      <div className="image">
        <img alt="img" src={productImageUrl} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <button
            style={{
              background: 'transparent',
              border: 0,
              color: '#4183C4',
            }}
            onClick={handleUpVote}
          >
            <i className="large caret up icon" />
          </button>
          {votes}
        </div>
        <div className="description">
          <a href={url}>{title}</a>
          <p>{description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img alt="img" className="ui avatar image" src={submitterAvatarUrl} />
        </div>
      </div>
    </div>
  );
};

export default Product;
