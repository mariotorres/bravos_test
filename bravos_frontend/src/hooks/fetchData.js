const API_URL = import.meta.env.VITE_API_URL;

const getBreeds = async (page) => {
    let _page_ = 1;
    if (page) {
        _page_ = page;
    }
    const rsp = await fetch(`${API_URL}/breeds?page=${_page_}`, {
        method: 'GET',
    });

    const json_data =  await rsp.json();

    const breeds = json_data.data.map(breed => {
        const {attributes} = breed;
        const {life, male_weight, female_weight} = attributes;
        return {
            id: breed.id,
            ...attributes,
            avg_lifespan: (life.max + life.min) / 2,
            avg_male_weight: (male_weight.max + male_weight.min) / 2,
            avg_female_weight: (female_weight.max + female_weight.min) / 2
        }
    });

    return breeds;
}

export {
    getBreeds,
}