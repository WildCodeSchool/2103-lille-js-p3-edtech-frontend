import dotenv from 'dotenv';
import SEvents from './Style';

dotenv.config();

function Events() {
  return (
    <SEvents className="actualites">
      <div className="actu">
        <h1>Actualites</h1>
        <div className="actu1">
          <h2>Actualite 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quas dolorum aliquid delectus recusandae porro! Laboriosam
            consequatur, rerum assumenda tenetur dolorum velit soluta impedit
            quod ullam, quos totam maiores labore.
          </p>
          <a
            href="https://www.istockphoto.com/fr"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdFpLmzyIwtHhQsXprIVftEB9XqN_S7PPRIkTDsW_SHxhUSjQOrYE1O9bNutoEYnxJHVc&usqp=CAU"
              alt=""
            />
          </a>
        </div>
        <div className="actu2">
          <h2>Actualite 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quas dolorum aliquid delectus recusandae porro! Laboriosam
            consequatur, rerum assumenda tenetur dolorum velit soluta impedit
            quod ullam, quos totam maiores labore.
          </p>
          <a
            href="https://www.istockphoto.com/fr"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Bqq4KvFggS4cffxQeen494-KBbrXmnREaQ1gSL9BR2IHAUBSfmwfcE2PfBWoHrYXGKQ&usqp=CAU"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="actu-widget-twitter">
        <h2>Twitter widget</h2>
        <div>
          <a
            className="twitter-timeline"
            data-width="auto"
            data-height="auto"
            data-dnt="true"
            href="https://twitter.com/edtech_hdf?ref_src=twsrc%5Etfw"
          >
            Tweets by edtech_hdf
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          >
            Twitter Hautes de France
          </script>
        </div>
      </div>
    </SEvents>
  );
}
export default Events;
