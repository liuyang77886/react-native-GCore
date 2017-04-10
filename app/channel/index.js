import address from './address'
export default class Channel {

    getBanner(){
        const gen_url = address.banner()
        // console.log('bannar url is ' + gen_url)
        return window.fetch(gen_url)
                .then((res) => res.json())
                .then((data) =>{
                  // console.log(data['results'])
                  return data['results']
                })
            .catch((error) => {
              console.log(error)
            })

    }
    getHomePage(){
        const gen_url = address.homePage()
        // console.log('home url is ' + gen_url)
        return window.fetch(gen_url)
            .then((res) => res.json())
            .then((data) =>{
                return data['results']
            })
            .catch((error) => {
                console.log(error)
            })

    }

    getNews(page){
        const gen_url = address.news(page)
        // console.log('page is ' + gen_url)
        return window.fetch(gen_url)
            .then((res) => res.json())
            .then((data) =>{

                // console.log(data['results'])
                return data['results']
            })
            .catch((error) => {
                console.log(error)
            })

    }
    getArticlePage(page){
        const gen_url = address.articlePage(page)
        // console.log('page is ' + gen_url)
        return window.fetch(gen_url)
            .then((res) => res.json())
            .then((data) =>{
                return data['results']
            })
            .catch((error) => {
                console.log(error)
            })

    }
    getComment(type,page,id){
        const gen_url = address.getComment(type,page,id)
        // console.log('comment is ' + gen_url)
        return window.fetch(gen_url)
            .then((res) => res.json())
            .then((data) =>{
                // console.log('~~~~~~~ comment ')
                // console.log(data)
                return data['results']
            })
            .catch((error) => {
                console.log(error)
            })

    }
    getPageInfo(id){
        const gen_url = address.getPageInfo(id)
        // console.log('getPageInfo is ' + gen_url)
        return window.fetch(gen_url)
            .then((res) => res.json())
            .then((data) =>{
                // console.log('~~~~~~~ getPageInfo ')
                // console.log(data)
                return data['results']
            })
            .catch((error) => {
                console.log(error)
            })

    }
    getTimeLine(id){
        const gen_url = address.getTimeLine(id)
        // console.log('getTimeLine is ' + gen_url)
        return window.fetch(gen_url)
            .then((res) => res.json())
            .then((data) =>{
                // console.log('~~~~~~~ getTimeLine ')
                // console.log(data)
                return data['results']
            })
            .catch((error) => {
                console.log(error)
            })

    }
    getTimeLineCategories(page){
        const gen_url = address.getTimeLineCategories(page)
        // console.log('getTimeLineCategories is ' + gen_url)
        return window.fetch(gen_url)
            .then((res) => res.json())
            .then((data) =>{
                return data['results']
            })
            .catch((error) => {
                console.log(error)
            })

    }
    getRadio(page){
        const gen_url = address.getRadio(page)
        // console.log('getRadio is ' + gen_url)
        return window.fetch(gen_url)
            .then((res) => res.json())
            .then((data) =>{
                return data['results']
            })
            .catch((error) => {
                console.log(error)
            })

    }
    getVideo(page){
        const gen_url = address.getVideo(page)
        // console.log('getVideo is ' + gen_url)
        return window.fetch(gen_url)
            .then((res) => res.json())
            .then((data) =>{
                return data['results']
            })
            .catch((error) => {
                console.log(error)
            })

    }


}
