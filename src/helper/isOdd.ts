export const isOdd = (data: { postId: number }) => {
    if (data) data.postId % 2 === 0 
    return false;
};