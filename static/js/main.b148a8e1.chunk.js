(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(7),n=i.n(a),s=(i(15),i(9)),l=i(2),c=i(3),r=i(5),o=i(4),m=i(1),d=i.n(m),b=(i(16),i(10)),h=(i(17),i(18),i(0)),j=function(e){var t=e.title,i=e.description,a=e.imgUrl,n=e.imdbUrl;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("figure",{className:"image is-4by3",children:Object(h.jsx)("img",{src:a,alt:"Film logo"})})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("figure",{className:"image is-48x48",children:Object(h.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(h.jsx)("div",{className:"media-content",children:Object(h.jsx)("p",{className:"title is-8",children:t})})]}),Object(h.jsxs)("div",{className:"content",children:[i,Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:n,children:"IMDB"})]})]})]})},p=function(e){var t=e.movies;return Object(h.jsx)("div",{className:"movies",children:t.map((function(e){return Object(h.jsx)(j,Object(b.a)({},e),e.imdbId)}))})},u=(i(20),function(e){Object(r.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},e.handleSubmit=function(t){t.preventDefault(),e.state.title&&e.state.description&&e.state.imgUrl&&e.state.imdbUrl&&e.state.imdbId&&(e.props.onAdd(e.state),e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this,t=this.state,i=t.title,a=t.description,n=t.imgUrl,s=t.imdbUrl,l=t.imdbId;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"Form",children:[Object(h.jsx)("h1",{className:"Form__title",children:"Add a new movie"}),Object(h.jsx)("label",{children:Object(h.jsx)("input",{type:"text",name:"title",className:"Form__input",placeholder:"Enter a title",value:i,onChange:function(t){e.setState({title:t.target.value})}})}),Object(h.jsx)("label",{children:Object(h.jsx)("input",{type:"text",name:"description",className:"Form__input",placeholder:"Enter a description",value:a,onChange:function(t){e.setState({description:t.target.value})}})}),Object(h.jsx)("label",{children:Object(h.jsx)("input",{type:"text",name:"imgUrl",className:"Form__input",placeholder:"Add an imgUrl",value:n,onChange:function(t){e.setState({imgUrl:t.target.value})}})}),Object(h.jsx)("label",{children:Object(h.jsx)("input",{type:"text",name:"imdbUrl",className:"Form__input",placeholder:"Add an imdbUrl",value:s,onChange:function(t){e.setState({imdbUrl:t.target.value})}})}),Object(h.jsx)("label",{children:Object(h.jsx)("input",{type:"text",name:"imdbId",className:"Form__input",placeholder:"Add an imdbId",value:l,onChange:function(t){e.setState({imdbId:t.target.value})}})}),Object(h.jsx)("button",{type:"submit",className:"Form__button",children:"Add"})]})}}]),i}(m.Component)),g=i(8),v=function(e){Object(r.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(l.a)(this,i);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={movies:g},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("div",{className:"page-content",children:Object(h.jsx)(p,{movies:e})}),Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)(u,{onAdd:this.addMovie})})]})}}]),i}(d.a.Component);n.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.b148a8e1.chunk.js.map