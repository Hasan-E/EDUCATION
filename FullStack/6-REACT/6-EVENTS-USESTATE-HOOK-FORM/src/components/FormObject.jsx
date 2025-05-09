import React, { useState } from "react";

const FormObject = () => {
  const [info, setInfo] = useState({ name: "", password: "", country: "" });
  const { name, password, country } = info;
  const handleSubmit = (e) => {
    e.preventDefault(); //? submit eventi'nin doğal davranışını beklet
    //database e gönder
    //* ileride bir submit islemin neticesinde verilerin nasıl post edilebileceğini gostermek adina eklenmistir.
    //? axios.post(url, {name,password,country})
    alert(`
        isim: ${name}
        password: ${password}
        ülke: ${country}
        `);
        setInfo({ name: "", password: "", country: "" })
  };

  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name: <span className="text-danger">{name} </span>
          </label>
          <input
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            type="text"
            className="form-control"
            id="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-danger">{password} </span>
          </label>
          <input
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country: <span className="text-danger">{country} </span>
          </label>
          <select
            onChange={(e) => setInfo({ ...info, country: e.target.value })}
            id="country"
            className="form-select"
            required
          >
            <option>COUNTRIES</option>
            <option value="Türkiye">TÜRKİYE</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
