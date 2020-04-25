import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import './Movie.css';

export default function Movie() {
    const [movies, setMovie] = useState([
        { name: "Avengers Endgamen Ball", rating: 4, releaseDate: 2019, image: "https://fr.web.img2.acsta.net/pictures/19/04/04/09/04/0472053.jpg" },
        { name: "Free", rating: 5, releaseDate: 2019, image: "https://fr.web.img2.acsta.net/pictures/20/03/12/11/36/4874079.jpg" },
        { name: "Bad Boys 3", rating: 3, releaseDate: 2020, image: "https://fr.web.img6.acsta.net/pictures/19/11/22/09/44/3027567.jpg" },
        { name: "Extinction", rating: 2, releaseDate: 2018, image: "https://upload.wikimedia.org/wikipedia/en/0/0d/Extinction.png" },
        { name: "Annihilation", rating: 5, releaseDate: 2018, image: "https://media.senscritique.com/media/000017617001/source_big/Annihilation.jpg" },
        { name: "the great wall", rating: 4, releaseDate: 2017, image: "https://www.screenfantastique.com/uploads/1/9/6/2/19626163/the-great-wall-movie-2017-poster6_orig.jpg" },
        { name: "Everest", rating: 2, releaseDate: 2015, image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Everest_poster.jpg/220px-Everest_poster.jpg" },
        { name: "Out of the Dark", rating: 1, releaseDate: 2014, image: "https://upload.wikimedia.org/wikipedia/en/b/b0/Out_of_the_Dark_2014_film_poster.png" }



    ]);
    const [newinput, setInput]=useState("");
    const handlNewTodoChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }
    const handlesearch= (e)=>{
        e.preventDefault();
        if((newinput.length===1)&&(!isNaN(newinput)))
        {
            setMovie(movies.filter((elem) => elem.rating == newinput));

        }
        else
        {
            if((newinput.length)===4 &&(!isNaN(newinput)))
            {
                setMovie(movies.filter((elem) => elem.releaseDate == newinput));
    
            }
            else
            setMovie(movies.filter((elem) => elem.name == newinput));

        }
        
    }
    return (

        <div class="container-fluid mydiv">

            <InputGroup className="mb-3 b">
                <FormControl
                    placeholder="input movie name"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                value={newinput} onChange={handlNewTodoChange}/>
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={handlesearch}>Search</Button>
                </InputGroup.Append>
            </InputGroup>

            <div className="row f">


                {
                    movies.map(elem => {
                        return (
                            <>
                                <div className="col">
                                    <Card style={{ width: '18rem' }} className="h">

                                        <Card.Img variant="top" src={elem.image} />
                                        <Card.Body>
                                            <Card.Title className="a">{elem.name}</Card.Title>
                                            <Card.Text className="a">
                                                {elem.rating}
                                            </Card.Text>

                                        </Card.Body>

                                    </Card>
                                </div>
                            </>

                        )
                    })
                }

            </div>

        </div>


    )
}
