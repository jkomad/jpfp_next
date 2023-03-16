import { supabase } from "@/utils/supabase";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const { data } = await supabase
    .from("students")
    .select()
    .eq("id", id)
    .single();
  return {
    props: {
      student: data,
    },
  };
};

const Student = ({ student }) => {
  console.log(student);
  return (
    <>
      <h1>
        {student.first_name}, {student.last_name}
      </h1>
      <h2>{student.email}</h2>
      <h3>{student.gender}</h3>
    </>
  );
};

export default Student;
