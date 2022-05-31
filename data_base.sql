CREATE TABLE users(
   Id_user int AUTO_INCREMENT,
   first_name VARCHAR(50),
   last_name VARCHAR(50),
   adress VARCHAR(50),
   email VARCHAR(50),
   password VARCHAR(50),
   phone_num int(8),
   user_photo VARCHAR(50),
   nb_article_solded SMALLINT,
   PRIMARY KEY(Id_user),
   UNIQUE(email),
   UNIQUE(phone_num)
);

CREATE TABLE article(
   Id_article int AUTO_INCREMENT,
   art_name VARCHAR(50),
   art_description VARCHAR(50),
   categorie VARCHAR(50),
   art_state VARCHAR(50),
   art_prix DECIMAL(15,2) NOT NULL,
   art_color VARCHAR(10),
   art_taille VARCHAR(20),
   payment_methode VARCHAR(50),
   art_photo VARCHAR(50),
   Id_user INT NOT NULL,
   PRIMARY KEY(Id_article),
   FOREIGN KEY(Id_user) REFERENCES users(Id_user)
);

CREATE TABLE commande(
   Id_commande int AUTO_INCREMENT,
   model_payment VARCHAR(50),
   solder_response boolean,
   paiment_effectue boolean,
   commande_envoyee boolean,
   date_commande DATE,
   Id_user INT NOT NULL,
   PRIMARY KEY(Id_commande),
   FOREIGN KEY(Id_user) REFERENCES users(Id_user)
);

CREATE TABLE appartien(
   Id_article INT,
   Id_commande INT,
   PRIMARY KEY(Id_article, Id_commande),
   FOREIGN KEY(Id_article) REFERENCES article(Id_article),
   FOREIGN KEY(Id_commande) REFERENCES commande(Id_commande)
);


INSERT INTO `users`
            (`Id_user`,
             `first_name`,
              `last_name`,
               `adress`,
                `email`,
                 `password`,
                  `phone_num`,
                   `user_photo`,
                    `nb_article_solded`
                    ) VALUES ('ahmed',
                    'mili',
                    'Jammel',
                    'aaaaaa@gmail.com',
                    'aaaaaa',
                    53406288,
                    '1004510',
                    'null',
                    0)