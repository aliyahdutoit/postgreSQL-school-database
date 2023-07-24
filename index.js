const express = require("express");
const pgp = require("pg-promise")();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgres://aliyahdutoit:xz9WerUqoB2F@ep-super-voice-874299.us-east-2.aws.neon.tech/neondb?ssl=true";

const config = {
  connectionString: DATABASE_URL,
};

config.ssl = {
  rejectUnauthorized: false,
};

const db = pgp(config);

// retrieve subject table
app.get("/api/subject", (req, res) => {
  db.manyOrNone("SELECT * FROM subject")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// retrieve school table
app.get("/api/school", (req, res) => {
  db.manyOrNone("SELECT * FROM school")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// retrive name, surname of teacher and subject linked to them
// app.get('/api/teachersubject', (req, res) => {
//   db.manyOrNone(' SELECT teacher.first_name, teacher.last_name, subject.name FROM teacher_subject INNER JOIN teacher ON teacher_subject.teacher_id = teacher.id INNER JOIN subject ON teacher_subject.subject_id = subject.id;')
//     .then(data => {
//       res.json(data);
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred' });
//     });
// });

  // filter subjects with teacher name in Single teacher View
  app.get("/api/teacher_subjects", (req, res, next) => {
  const teacher_id = req.query.teacher_id;

  if (!teacher_id) {
    return res.json({
      error: "No teacher entered",
    });
  }

  db.any("SELECT filter_teachers($1)", [teacher_id])
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    })
    .catch(next);
});

//filter teachers with subject name in Single Subject View

app.get("/api/subject_teachers", (req, res, next) => {


const subject_name = req.query.subject_name;

if (!subject_name) {
  return res.json({
    error: "No subject entered",
  });
}

db.any("SELECT filter_subjects($1)", [subject_name])
  .then((data) => {
    res.json(data);
  })
  .catch((error) => {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  })
  .catch(next);

})

//add a new subject
app.post("/api/subject", (req, res) => {
  db.one(" SELECT add_subject($1); ", [req.body.subject_name])
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

//delete a subject
app.delete("/api/subject", (req, res) => {
  db.one(" SELECT delete_subject($1); ", [req.body.subject_name])
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

//add a new school
app.post("/api/school", (req, res) => {
  db.one(" SELECT add_school($1, $2); ", [
    req.body.school_name,
    req.body.school_region,
  ])
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// retrieve teacher table
app.get("/api/teacher", (req, res) => {
  db.manyOrNone("SELECT * FROM teacher")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

//link teacher to subject
app.post("/api/teachersubject", (req, res) => {
  db.one(" SELECT link_teacher_to_subject($1, $2) ; ", [
    req.body.teacher_id,
    req.body.subject_id,
  ])
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

//add a new teacher
app.post("/api/teacher", (req, res) => {
  db.one("SELECT add_teacher($1, $2, $3);", [
    req.body.teacher_first_name,
    req.body.teacher_last_name,
    req.body.teacher_email,
  ])
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});


// retrieve learner table
app.get("/api/learner", (req, res) => {
  db.manyOrNone("SELECT * FROM learner")
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

//add a new learner
app.post("/api/learner", (req, res) => {
  db.one("SELECT add_learner($1, $2, $3, $4);", [
    req.body.learner_first_name,
    req.body.learner_last_name,
    req.body.learner_email,
    req.body.learner_grade_id
  ])
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = db;
