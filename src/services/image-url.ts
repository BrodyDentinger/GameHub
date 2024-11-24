const getCroppedImageUrl = (url : string) => {

    // get all the characters in the url from the beginning to the end of the media parameter
    const target = 'media/';
    const index = url.indexOf(target) + target.length;

    // insert the cropping mechanism and the rest of the url
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index)


}

export default getCroppedImageUrl;