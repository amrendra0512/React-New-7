import Movie from "./Movie";
import image1 from '../Images/the airbender.jpg';
import image2 from '../Images/formula 1.jpg';
import image3 from '../Images/unicorn academy.jpg';

const MovieList = () => {
    const titles = ['the Airbender','Formula 1','Unicorn Academy'];
    const images = [image1,image2,image3];
    // let title = 'the Airbender', title1 = 'Formula 1' , title2 = 'Unicorn Academy';
    // const imageUrl = image1;//'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABeAL4BFPrmyexJhCaB9PTQ8NDULI08FmUpvcWm1Zl3refH5SYoGMLMN8oDB1ZRCNuORQQaE-VC8FaUL2qBqUNfhZsnKTnXkWoM5EKqb43Um8POUoJ20OLIv5kkJ2dw28yULr4SD-JaBBLu2nVYehgT4Q_zslKDoFlRpefsMzBAACgILZtv4pI-7epksKuXB2qdNXYIkfJowQvB9B7cTpaByN1s1UCxhdlGntYR51jLQSMUVSNF_Op-by0t5o2YTnoweS8shv80yjaaBzkEeAyLRtE2_8oE1a1-X5AxPWCAVPrshNX17zTDl8iaNhpqlPi2m8ergA1ZVN5ZGrYhGdDGZXcjgIfCGpRpa-n4YPT43Ln7QzVq0.jpg?r=09b'
    // const imageUrl2 = image2;//'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABelym3oizsPRmzalSCHLzlUvCg5_t7nQrftI9vcfrm1fNMvrYtAQXucOo7F7aYgdinQ-eiH3vvXGxj3E2AEYxGj3T6dh8UC2foOVddUaNSwF3MNa1I-wk_TWGRmyVL1p8L4cjdY9whYqsxJ_2JnPH6QRhJkWe2uHGO7RNB_wiaLYVNTIQlRFTaBl1BUoO0LKENl6EZMdbqf_8Z2qmPgDuU2ZZUYgpB-KXBtC-4cQORzai1L_jNnf7TQ7VUz_LyhPgCWIqWMz86aOi7OVL_vx_g9TGw-yI8U8zqrMGvtWJDpv5zpulrdsAh4EbXVml4V2dXI8F5CCSlk9loLhb9V70wCZUVIQ1H0fcnOakaSplWJ9Dw.jpg?r=cf9'
    // const imageUrl3 = image3;//'https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABW0CdL7BuY0VTI81TjA2iMRBryIJt2mUIsehZnbVH_AlD0DAXB5kE9-RJ9f-at0-SPB4PA8QbonFUC3eA-ND3puHO2m-7pab-mCDUA1QTbPbw89q3EkQfjcY9M4NM0rZEnGE.jpg?r=4f5'
    
    return (
        <>
        {titles.map((tit,ind)=>(
            <Movie  updatedTitle={tit} imageUrl ={images[ind]} key ={ind}/>
        ))}
        {/* <Movie  updatedTitle={title} imageUrl = {imageUrl}/>
        <Movie  updatedTitle={title1} imageUrl = {imageUrl2}/>
        <Movie  updatedTitle={title2} imageUrl = {imageUrl3}/> */}

        </>
    )
}
export default MovieList;