import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import Footer from './Footer'

export default function IdeasItem() {
    const [ ideasItem, setIdeasItem] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == '${slug}']{
            title,
            subtitle,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setIdeasItem(data[0]))
        .catch(console.error);
    }, [slug]);

    if(!ideasItem) return <div>Loading...</div>;

    return(
        <main>
            <article>
                <header>
                    <div>
                    </div>
                    <div className="ideasItem-img">
                        <img src={ideasItem.mainImage.asset.url} alt={ideasItem.title}/>
                    </div>
                </header>
                <div className="d-flex justify-content-center align-items-center flex-wrap flex-column">
                        <div className="ideasItem-title">
                            <br />
                            <h4 className="h6">
                                {ideasItem.subtitle}
                            </h4>
                            <h2 className="h1 xbold">
                                {ideasItem.title}
                            </h2>
                            {/* <div>
                                <img src={urlFor(ideasItem.authorImage).url()} alt={ideasItem.name} className="ideasItem-authorImg"/>
                            </div> */}
                            <p className="xbold">
                                Por {ideasItem.name}
                            </p>
                        </div>
                    <BlockContent 
                    blocks={ideasItem.body} 
                    projectId="pcqnkk9r" 
                    dataset="production"
                    className="blockContent"/>
                </div>
            </article>
            
            <Footer />
        </main>
    )
}