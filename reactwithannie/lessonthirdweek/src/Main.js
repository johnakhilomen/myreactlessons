import React, { Component } from 'react';
import MainItem from './MainItem';
import './Main.css';
class Main extends Component {
    state = {
        mainInfo: [
            {
                title: "Title 1",
                image: "image1.jpg",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed neque eu ipsum facilisis pellentesque. Aenean nec nulla non ex scelerisque fringilla id nec ante. Etiam non placerat ipsum. Nulla ut posuere mi. Fusce ac tristique odio. Aliquam aliquam congue justo, sed mollis neque finibus at. Aliquam vel convallis massa. Vivamus ut mauris ligula. Vivamus at nibh ac erat commodo consequat eu aliquet enim. Vivamus tincidunt diam ut dui blandit, ac pharetra erat lacinia. Aenean ac leo neque.
                Ut quis nibh sollicitudin, pharetra orci vitae, ornare velit. In quis convallis ipsum, in tristique magna. In bibendum a nisl id pellentesque. Mauris laoreet magna odio, et pellentesque est venenatis ac. Suspendisse sodales sagittis nulla a consequat. Nam aliquet lacus in neque semper lobortis. Nunc ligula mi, efficitur eu dolor at, rutrum facilisis lorem.
                Integer vitae tempor nisl. Etiam eu consectetur justo. Nullam rhoncus eu arcu ac tempus. Quisque non suscipit libero. Etiam cursus diam sit amet luctus consectetur. Maecenas ante est, luctus sed dapibus id, tempus eget nisl. Ut sed odio sit amet dui porta sodales sit amet eget mi. Donec ut odio rhoncus, fringilla risus rhoncus, pretium augue. Quisque orci erat, interdum quis cursus quis, convallis eget mauris. Nulla a faucibus orci. Nullam tempus, justo a rhoncus dignissim, lectus est ornare ante, eu convallis magna neque quis ipsum.`
            },
            {
            title: "Title 2",
            image: "image3.jpg",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed neque eu ipsum facilisis pellentesque. Aenean nec nulla non ex scelerisque fringilla id nec ante. Etiam non placerat ipsum. Nulla ut posuere mi. Fusce ac tristique odio. Aliquam aliquam congue justo, sed mollis neque finibus at. Aliquam vel convallis massa. Vivamus ut mauris ligula. Vivamus at nibh ac erat commodo consequat eu aliquet enim. Vivamus tincidunt diam ut dui blandit, ac pharetra erat lacinia. Aenean ac leo neque.
            Ut quis nibh sollicitudin, pharetra orci vitae, ornare velit. In quis convallis ipsum, in tristique magna. In bibendum a nisl id pellentesque. Mauris laoreet magna odio, et pellentesque est venenatis ac. Suspendisse sodales sagittis nulla a consequat. Nam aliquet lacus in neque semper lobortis. Nunc ligula mi, efficitur eu dolor at, rutrum facilisis lorem.
            Integer vitae tempor nisl. Etiam eu consectetur justo. Nullam rhoncus eu arcu ac tempus. Quisque non suscipit libero. Etiam cursus diam sit amet luctus consectetur. Maecenas ante est, luctus sed dapibus id, tempus eget nisl. Ut sed odio sit amet dui porta sodales sit amet eget mi. Donec ut odio rhoncus, fringilla risus rhoncus, pretium augue. Quisque orci erat, interdum quis cursus quis, convallis eget mauris. Nulla a faucibus orci. Nullam tempus, justo a rhoncus dignissim, lectus est ornare ante, eu convallis magna neque quis ipsum.`
            }
        ],
    }
    render() { 
        let counter = 0;
        return ( 
            <main className="mainComponent">
                    {
                        this.state.mainInfo.map((mainItem) =>
                        {
                            counter++; //counter = counter + 1;
                            const ky = "mainItem" + counter; // mainItem1, mainItem2
                            return <MainItem key={ky} mainItem = {mainItem}></MainItem>
                        })
                    }
            </main>
         );
    }
}
 
export default Main;