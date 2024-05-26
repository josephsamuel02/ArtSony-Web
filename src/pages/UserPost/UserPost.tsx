
'use client';
interface Item {
  id: string;
  imageUrl: string;
  name: string;
  location: string;
  category: string;
  imgUrl:string;
  picUrl:string;
  photoUrl:string;
}

interface UserPostProps {
  items: Item[];
}

const UserPost: React.FC<UserPostProps> = ({ items }) => {
  return (
    <div>
    
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {items.map((item) => (
          <div key={item.id} style={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)', gap: '10px',  borderRadius: '8px', backgroundColor: 'white', padding: '16px' }}>
            <img src={item.imageUrl} alt={item.category} style={{ gridRow: 'span 4', width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '8px' }} />
            <div style={{ display:'flex',gridRow: 'span 1',gap:'10px' }}>
              <p style={{ fontWeight: 'bold' }}>{item.name}</p>
              <img src={item.imgUrl} alt={item.imgUrl}/>
              <img src={item.picUrl} alt={item.picUrl}/>
              <img src={item.photoUrl} alt={item.photoUrl}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPost;
