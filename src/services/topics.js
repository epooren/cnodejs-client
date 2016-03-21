

const API = {
    'topics': '/api/v1/topics',
    'detail': '/api/v1/topic/:id',
    'fav': '/api/v1/topic_collect/collect',
    'unfav': '/api/v1/topic_collect/de_collect',
    'userfav': '/api/v1/topic_collect/:username',
    'comment': '/api/v1/topic/:id/replies',
    'like': '/api/v1/reply/:replyId/ups'
};


function get(tab, page, limit, mdrender = true) {

}


function getDetail(accesstoken, id, mdrender = true) {

}


function create(accesstoken, tab, title, content) {

}



function addToFav(accesstoken, id) {

}

function removeFromFav(accesstoken, id) {

}

function getFav(username) {

}

function comment(accesstoken, id, content, replyId) {

}

function likeComment(accesstoken, replyId) {

}

