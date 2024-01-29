import "./huddle.css";

const Huddle = () => {
  return (
    <div className="huddle">
      <section className="huddle__content">
        <div className="huddle_content-logo">
          <img src="/public/images/logo.svg" alt="" />
        </div>

        <article className="huddle__article">
          <img
            className="huddle__image"
            src="/public/images/illustration-mockups.svg"
            alt=""
          />

          <div className="huddle__text">
            <h1 className="huddle__title">
              Build The Community Your Fans Will Love
            </h1>
            <p className="huddle__description">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button className="huddle__button">Register</button>
          </div>
        </article>

        <ul className="huddle__social-list">
          <li className="huddle__social-item">facebook</li>
          <li className="huddle__social-item">twitter</li>
          <li className="huddle__social-item">instagram</li>
        </ul>
      </section>
    </div>
  );
};

export default Huddle;
