import './Card.scss';
import { DeleteOutlined, FileImageOutlined } from '@ant-design/icons';

function Card({ memberData }) {
    return (
        <div className="card" draggable >
            <div className="remove-button">
                <DeleteOutlined style={{ fontSize: "16px"}}/>
            </div>
            <div className="image-area">
                { memberData.profileUrl !== '' ? <img src={memberData.profileUrl} alt="profile"/> : <FileImageOutlined style={{fontSize: "40px"}}/> }
            </div>
            <div className="card__content card__text name">{memberData.name}</div>
            <div className="card__content card__text instagram">{memberData.instagram}</div>
            <div className="card__content card__text introduction">{memberData.introduction}</div>
            <div className="card__content card__text mbti">{memberData.mbti}</div>
        </div>
    );
}

export default Card;