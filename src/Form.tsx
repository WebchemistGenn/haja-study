import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "./useStore";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const { num, setNum } = useStore((state) => state);
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", age: "" });

  // change를 공통화 하여 구현 ( name, value를 이용 )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name: ttt, value } = e.target;
    setForm((state) => ({ ...state, [ttt]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit의 onSubmit시에 페이지 이동이 일어나니 금지시켜야합니다.
    console.log(form);
  };

  return (
    <div>
      <Link to="/no-jquery">Link</Link>
      <button onClick={() => navigate("/no-jquery")}>no-jquery</button>
      <h1>Form</h1>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>add</button>
      <form style={{ display: "flex", flexDirection: "column", gap: "8px" }} onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <input type="text" name="email" value={form.email} onChange={handleChange} />
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
        <input type="text" name="age" value={form.age} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
