import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Preloader, Puff } from "react-preloader-icon";

export default function Ideas() {
    const [postData, setPost] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"] | order(publishedAt desc){
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
        }`
            )
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    if (!postData)
        return (
            <div>
                <section id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <hr />
                                <h2 className="xbold black mb-4 pb-4">
                                    Imagen y cultura.
                                    <br />
                                    Porque en AG siempre tenemos algo para
                                    decir.
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
                <Footer />
            </div>
        );

    return (
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <hr />
                        <h2 className="xbold black mb-4 pb-4">
                            Imagen y cultura.
                            <br />
                            Porque en AG siempre tenemos algo para decir.
                        </h2>
                        <hr />
                    </div>
                </div>
                <div className="row flex-wrap">
                    {postData &&
                        postData.map((post, index) => (
                            <article className="col-sm-4 mb-4 ideas-article">
                                <Link
                                    to={"/ideas/" + post.slug.current}
                                    className="nounderline"
                                    key={post.slug.current}
                                >
                                    <span key={index}>
                                        <div className="post-img-div mb-2">
                                            <img
                                                src={post.mainImage.asset.url}
                                                className="post-img"
                                                alt={post.mainImage.alt}
                                            />
                                        </div>
                                        <span>
                                            <p className="ideas-caption text-uppercase black">
                                                {post.subtitle}
                                            </p>
                                            <h4 className="ideas-caption xbold">
                                                {post.title}
                                            </h4>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="arrow"
                                            >
                                                <marker
                                                    id="marker-505"
                                                    refX="13"
                                                    refY="8"
                                                    viewBox="0 0 6 4"
                                                >
                                                    <path d="M9.5,9.1L0,14.5l1,1.7l14.4-8.1L1,0L0,1.7l9.5,5.4V9.1z"></path>
                                                </marker>{" "}
                                                <line
                                                    marker-end="url(#marker-505)"
                                                    x1="0"
                                                    y1="50%"
                                                    x2="25%"
                                                    y2="50%"
                                                ></line>
                                            </svg>
                                        </span>
                                    </span>
                                </Link>
                            </article>
                        ))}
                </div>
            </div>
            <Footer />
        </section>
    );
}
