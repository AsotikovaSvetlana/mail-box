import axios from 'axios';

export const MailBoxAPI = {
  async getMailsList() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/messages`);
      return res.data;
    } catch (e) {
      throw new Error('Get mails error');
    }
  },
  async getDefaultFolders() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/folders`);
      return res.data;
    } catch (e) {
      throw new Error('Get default folders error');
    }
  },
  async getUserFolders() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/user-folders`);
      return res.data;
    } catch (e) {
      throw new Error('Get user folders error');
    }
  },
  async addUserFolder(data) {
    try {
      await axios.post(`${process.env.REACT_APP_URL}/user-folders`, data);
    } catch (e) {
      throw new Error('User folder wasn`t added');
    }
  },
  async deleteUserFolder(id) {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/user-folders/${id}`);
    } catch (e) {
      throw new Error('User folder wasn`t deleted');
    }
  },
  async getMail(id) {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/messages/${id}`);
      return res.data;
    } catch (e) {
      throw new Error('Get mail details error');
    }
  },
  async editMail(mail) {
    try {
      await axios.post(`${process.env.REACT_APP_URL}/messages`, mail);
    } catch (e) {
      throw new Error('Edit mail error');
    }
  },
  async deleteMail(id) {
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/messages/${id}`);
    } catch (e) {
      throw new Error('Delete mail error');
    }
  },
}
