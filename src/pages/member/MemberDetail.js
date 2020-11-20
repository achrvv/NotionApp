import './MemberDetail.scss';

import { useState } from 'react';

import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';

import { InstagramOutlined, AlignLeftOutlined, RadarChartOutlined } from '@ant-design/icons';

function MemberDetail({ match }) {
    const [memberState, setMemberState] = useState({
        // 테스트를 위해 임시로 초기값 설정!
        status: 'resolved',
        member: {
            name: 'name',
            instagram: 'instagram',
            introduction: 'intro',
            mbti: 'mbti',
            profileUrl: 'https://sopt26.s3.ap-northeast-2.amazonaws.com/images/origin/1603800059249.jpg',
        }
    });

    const memberElement = () => (
        <div className="member-detail">
            <div className="member-detail__button-area">
                <Button text="Add icon"></Button>
                <Button text="Add cover"></Button>
            </div>
            <input className="member-detail__content name" value={memberState.member.name} onChange={(evt) => console.log('name Change', evt) }/>
            <hr style={{borderTop: "solid 1px #eee", marginBottom: "24px"}}/>
            <div className="member-detail__content">
                <div className="content-title"><InstagramOutlined />&nbsp; 인스타 아이디</div>
                <input className="content-input" name="instagram" value='INSTAGRAM' onChange={ (evt) => console.log('instagram Change', evt)}/>
            </div>
            <div className="member-detail__content">
                <div className="content-title"><AlignLeftOutlined />&nbsp; 한 줄 소개</div>
                <input className="content-input" name="introduction" value='INTRO' onChange={ (evt) => console.log('intro Change', evt)}/>
            </div>
            <div className="member-detail__content">
                <div className="content-title"><RadarChartOutlined />&nbsp; mbti</div>
                <input className="content-input" value='MBTI' onChange={ (evt) => console.log('mbti Change', evt)}/>
            </div>
            <div className="member-detail__content">
                { memberState.member.profileUrl !== '' ? <img className="content-image" src={memberState.member.profileUrl} alt={'profile url'} /> : '' }
            </div>
        </div>
    );

    switch (memberState.status) {
        case 'pending':
            return <Loading />;
        case 'resolved':
            return memberElement();
        case 'rejected':
            return <h1>해당 멤버가 없습니다</h1>;
        case 'idle':
        default: 
            return <div></div>
    }
}

export default MemberDetail;