export const FoldersApi = {
  getFolders: async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_URL}/folders`);
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const folders = await response.json();
      return folders;
    } catch (error) {
      console.log('error');
    }
  }
}