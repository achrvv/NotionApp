import axios from 'axios';

const url = 'http://127.0.0.1:5000/api/members';

const getMembersAPI = async () => {
    try {
        const { data } = await axios.get(`${url}`);
        console.log('[SUCCESS] GET MEMBERS', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET MEMBERS', e);
    }
}

export {
    getMembersAPI,
};