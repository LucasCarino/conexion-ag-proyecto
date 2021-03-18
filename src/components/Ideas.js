import React, {useState, useEffect} from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { Preloader, Puff } from 'react-preloader-icon';

export default function Ideas() {
    const [postData, setPost] = useState(null);
    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"] | order(publishedAt desc){
            title,
            subtitle,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            alt,
            publishedAt
        }`)
        .then((data) => setPost(data))
        .catch(console.error)
    }, []);

       
    


    if(!postData) return <div>
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <hr />
                    <h2 className="xbold black">
                        Imagen y cultura.
                        <br />
                        Porque en AG siempre tenemos algo para decir.
                    </h2>
                    <hr />
                </div>
            </div>
            </div>
        </section>
        <div className="d-flex align-items-center justify-content-center mt-5 p-5">
            <Preloader
            use={Puff}
            size={60}
            strokeWidth={6}
            strokeColor="#000"
            duration={2000}
            />
        </div>
        <Footer/>
    </div>;

    return(
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <hr />
                        <h2 className="xbold black mb-4">
                            Imagen y cultura.
                            <br />
                            Porque en AG siempre tenemos algo para decir.
                        </h2>
                        <hr />
                    </div>
                </div>
                        <div className="row flex-wrap">
                            {postData && postData.map((post, index) => (
                            <article className="col-sm-4 p-3">
                                <Link to={"/ideas/" + post.slug.current} key={post.slug.current}>
                                    <span key={index}>
                                            <div className="post-img-div">
                                                <img src={post.mainImage.asset.url} className="post-img" alt={post.mainImage.alt}/>
                                            </div>
                                        <span>
                                            <p className="ideas-caption text-uppercase">
                                                {post.subtitle}
                                            </p>
                                            <h4 className="ideas-caption">
                                                {post.title}
                                            </h4>
                                        </span>
                                    </span>
                                </Link>
                            </article>
                            ))}
                        </div>
            </div>
            <Footer />
        </section>
    )
}