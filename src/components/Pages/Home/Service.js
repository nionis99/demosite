import React, {useEffect, useState} from 'react';
import Spinner from "../../Spinner/Spinner";

const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
};

function Service() {
    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const renderPosts = () => {
        return !isLoading && posts ? posts.map(post => (
            <li key={post.id} onClick={() => alert(post.body)}>{post.title}</li>
        )) : <Spinner/>
    }

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            getPosts().then(posts => {
                setPosts(posts.filter(data => data.userId === 7).slice(0, 4));
                setIsLoading(false);
            });
        };
        fetchData();
    }, []);

    return (
        <div className="service">
            <div className="service-1st">
                <div className="service-1st-title">
                    web development
                </div>
                <div className="service-1st-description">
                    <p>Phasellus interdum aliquam eros, vitae vestibulum elit malesuad Phasellus interdum aliquam eros,
                        vitae vestibulum elit malesuad Phasellus interdum aliquam eros, vitae vestibulum elit
                        malesuad</p>
                    <p> Phasellus interdum aliquam eros, vitae vestibulum elit malesuad Phasellus interdum aliquam eros,
                        vitae vestibulum elit malesuad Phasellus interdum aliquam eros, vitae vestibulum elit
                        malesuad</p>
                </div>
            </div>
            <div className="service-2nd">
                <div className="service-2st-title">Wireframe</div>
                <div className="service-2st-description">
                    <p>Phasellus interdum aliquam eros, vitae vestibulum elit malesuad ut</p>
                </div>
                <div className="service-2nd-data">
                    <div className="service-2nd-data-left">
                        <div className="service-2nd-data-left-title">Custom List</div>
                        <div className="service-2nd-data-left-description"><p>Some heading</p></div>
                        <div
                            className="service-2nd-data-left-list">{renderPosts(isLoading, posts)}</div>
                    </div>
                    <div className="service-2nd-data-right">
                        <div className="service-2nd-data-right-title">Web Development</div>
                        <div className="service-2nd-data-right-description">
                            <p>Phasellus interdum aliquam eros, vitae vestibulum elit malesuad ut. Integer nec ex
                                accumsan, suspicit eros a, tempus nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
