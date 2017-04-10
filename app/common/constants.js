'use strict'
/**
 * Created by Leon.Hwa on 17/3/20.
 */
import  {Dimensions, PixelRatio} from  'react-native'

const  APP = {
    TAB: 'APP.TAB',
    NAVIGATION:'APP.NAVIGATION'
}

const WINDOW = {
    width :Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    onePR:1/PixelRatio.get()
}

const  AUTH_KEY = {
    auth_key: 'dpkynzs2q0wm9o5gi1r83fcabthl4eu'
}
const HOME = {
    INFO: 'HOME.INFO',
    DETAIL: 'HOME.DETAIL',
    BANNAR:'HOME.BANNAR'
}

const NEWS = {
    INFO: 'NEWS.INFO',
    DETAIL: 'NEWS.DETAIL',
}

const ARTICLE = {
    INFO: 'ARTICLE.INFO',
    DETAIL: 'ARTICLE.DETAIL',
}
const COMMENT = {
    HOT: 'COMMENT.HOT',
    TIME: 'COMMENT.TIME',
}
const PAGEINFO = {
    INFO: 'PAGEINFO'
}
const TIMELINE = {
    INFO: 'TIMELINE.INFO',
    CATEGORY:'TIMELINE.CATEGORY',
    DOWNLOAD: 'TIMELINE.DOWNLOAD'
}
const PLAY = {
    SHOW: 'PLAY.SHOW',
    HIDDEN:'PLAY.HIDDEN'
}
const RADIO = {
    INFO: 'RADIO.INFO'
}
const VIDEO = {
    INFO: 'VIDEO.INFO'
}
export default {
    APP,
    AUTH_KEY,
    WINDOW,
    HOME,
    ARTICLE,
    NEWS,
    COMMENT,
    PAGEINFO,
    TIMELINE,
    PLAY,
    RADIO,
    VIDEO
}