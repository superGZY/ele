export const urlChange = function (imageurl, wh) {
    if(/(http|https)/.test(imageurl)){
        return imageurl
    }
    else{
        return 'https://cube.elemecdn.com/'+imageurl.slice(0,1)+'/'+imageurl.slice(1,3)+'/'+imageurl.slice(3)+'.'+imageurl.slice(imageurl.length-4).replace(/[0-9]|d|b/,'')+wh
    }
    
}