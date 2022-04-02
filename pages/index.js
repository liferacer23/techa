import Head from "next/head";
import { useQuery } from "@apollo/client";
import { QUERY } from "../Queries/Queries";
import { useState } from "react";

/* import client from "../apolloClient";
import { gql } from "@apollo/client"; */

export default function Home(/* { results } */) {
  const { data, loading, err } = useQuery(QUERY);
  console.log(data);

  if (loading) return <p>Loading....</p>;
  if (err) return <p>Err....</p>;

  return (
    
      <div>
        <Head>
          <title>Techawks</title>
        </Head>
      </div>
   
  );
}

/* 
      {/*  <div>
        {data.characters.results.map((payload, index) => {
          return <p key={index}>{payload.name}</p>;
        })}
      </div> */
{
  /*  <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.4,
            opacity: 0,
          },
          visible: {
            rotate:[0,30,-30,0],
            scale: [1,2,1.5,1],
            opacity: 1,
            x:200,
            transition: {
              duration: 2,
            },
          },
        }}
      >
        <h1>MY name is whaaa?</h1>
      </motion.div>

      <motion.h3
        whileHover={{
          x:900,
          scale: 1.5,
          transition: {
            duration:1.5
          },
        }}
      >
        asmdllkasmdlkmalskdmlaskmdlksmlkd
      </motion.h3> */
}

/* export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        characters {
          results {
            name
            episode {
              name
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      results: data.characters.results,
    },
  };
};
 */
