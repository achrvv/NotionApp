import axios from 'axios';

// const url = 'http://127.0.0.1:5000/api/members';
const url = 'http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members';

const getMembersAPI = async () => {
    // http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members
    try {
        const { data } = await axios.get(`${url}`);
        console.log('[SUCCESS] GET MEMBERS', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET MEMBERS', e);
        return e;
    }
}


export {
    getMembersAPI,
};