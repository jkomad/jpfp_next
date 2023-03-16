import { supabase } from "@/utils/supabase";
import Link from "next/link";

export const getServerSideProps = async () => {
  const { data } = await supabase.from("students").select();
  return {
    props: {
      students: data,
    },
  };
};

const Students = ({ students }) => {
  return (
    <div>
      <h1>Students</h1>
      {students.map((student) => {
        return (
          <Link href={`students/${student.id}`} key={student.id}>
            <h1>
              {student.first_name}, {student.last_name}
            </h1>
            <h2>{student.email}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Students;
