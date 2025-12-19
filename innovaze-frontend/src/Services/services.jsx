export const getfeed = () => {
    return Promise.resolve( [
        {   id:1,
            user: "Aakash",
            role: "Beginner",
            caption: "My first pitch!",
            videosrc: "/sample.mp4",
        },
        {
            id:2,
            user: "Sandeep",
            role: "Mid-level",
            caption: "Funding updates", 
            videosrc: "/sample.mp4",
        },
        {
            id:3,
            user: "Ayush",  
            role: "Investor",
            caption: "Looking for talent",
            videosrc: "/sample.mp4",
        },
    ]);
}