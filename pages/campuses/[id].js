import { supabase } from "@/utils/supabase";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const { data } = await supabase
    .from("campuses")
    .select()
    .eq("id", id)
    .single();
  return {
    props: {
      campus: data,
    },
  };
};

const Campus = ({ campus }) => {
  console.log(campus);
  return (
    <>
      <h1>{campus.name}</h1>
      <h2>{campus.address}</h2>
      <h2>Students</h2>
    </>
  );
};

export default Campus;
