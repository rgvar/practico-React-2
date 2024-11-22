import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm"
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { Form, InputGroup } from "react-bootstrap";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";
import styles from "./Search.module.css"

export const Search = () => {

    const { values, handleChange } = useForm({
        search: "",
    });

    const { search } = values;

    const [heroes, setHeroes] = useState<IHeroes[]>([]);

    function capitalizeFirstLetter(string: string): string {
        if (string.length === 0) return string;
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect( () => {
        const result = heroesData.filter((h) => 
            h.superhero.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase()) || 
            h.publisher.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase()) 
        );
        setHeroes(result);
    }, [search])

    return (
        <div className={styles.containerSearch}>
            <div>
                <InputGroup className="mb-3" >
                    <InputGroup.Text>Ingrese su búsqueda: </InputGroup.Text>
                    <Form.Control onChange={handleChange} type="text" name="search" />
                </InputGroup>
            </div>

            <div className={styles.containerListHeroes}>
                {
                    heroes.length > 0 ? (
                        <div>
                            <ListHeroes heroes={heroes} title={capitalizeFirstLetter(search)} />
                        </div>
                    ) : (
                        <div>
                            <h2>No se han encontrado resultados para la búsqueda.</h2>
                        </div>
                    )
                }

            </div>

            {/* <div className={styles.containerListHeroes} >
                {
                    heroes.length > 0 ? (
                        <div className={styles.container} >
                            { heroes.map((hero) => (
                                <div key={hero.id}>
                                    <HeroCard hero={hero} />
                                </div>
                            )) }
                        </div>
                    ) : (
                        <div>
                            <h2>No se han encontrado resultados para la búsqueda.</h2>
                        </div>
                    )
                }
            </div> */}

        
        </div>
    )
}
