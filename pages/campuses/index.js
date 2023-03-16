import { supabase } from "@/utils/supabase";
import Link from "next/link";

export const getServerSideProps = async () => {
  const { data } = await supabase.from("campuses").select();
  return {
    props: {
      campuses: data,
    },
  };
};

const Campuses = ({ campuses }) => {
  console.log(campuses);
  return (
    <div>
      <h1>Campuses</h1>
      {campuses.map((campus) => {
        return (
          <Link href={`campuses/${campus.id}`} key={campus.id}>
            <h1>{campus.name}</h1>
            <h2>{campus.address}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Campuses;
