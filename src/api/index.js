const BASE_URL = "http://fitnesstrac-kr.herokuapp.com/api";

export async function register(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };
  const response = await fetch(`${BASE_URL}/users/register`, options);
  const result = await response.json();
  return result;
}
//^^^^not checked

export async function login(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };
  const response = await fetch(`${BASE_URL}/users/login`, options);
  const result = await response.json();
  return result;
}
//^^^^ not checked

export async function getUserData(token) {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${BASE_URL}/users/me`, options);
  const result = await response.json();
  return result;
}
//^^^ not checked

export async function getPublicRoutinesByUser(username, token) {
  const options = {};
  if (token) {
    options.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  }
  const response = await fetch(
    `${BASE_URL}/users/${username}/routines`,
    options
  );
  const result = await response.json();
  return result;
}


export async function getAllActivities() {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${BASE_URL}/activities`, options);
  const result = await response.json();
  return result;
}
//^^^ not checked

export async function createActivity(token, name, description) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      description: description,
    }),
  }; //would we add 'Authorization' header
  const response = await fetch(`${BASE_URL}/activities`, options);
  const result = await response.json();
  return result;
}
//^^^ not checked

export async function updateActivity(token, activityId, name, description) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      description: description,
    }),
  };
  const response = await fetch(`${BASE_URL}/activities/${activityId}`, options);
  const result = await response.json();
  return result;
}

export async function getPublicRoutinesByActivity(activityId) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${BASE_URL}/activities/${activityId}/routines`,
    options
  );
  const result = await response.json();
  return result;
}

export async function getAllPublicRoutines() {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${BASE_URL}/routines`, options);
  const result = await response.json();
  return result;
}

export async function createRoutine(token, name, goal, isPublic) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
      isPublic: isPublic,
    }),
  };
  const response = await fetch(`${BASE_URL}/routines`, options);
  const result = await response.json();
  return result;
}

export async function updateRoutine(token, routineId, name, goal, isPublic) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      goal: goal,
      isPublic: isPublic,
    }),
  };
  const response = await fetch(`${BASE_URL}/routines/${routineId}`, options);
  const result = await response.json();
  return result;
}

export async function deleteRoutine(routineId, token) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${BASE_URL}/routines/${routineId}`, options);
  const result = await response.json();
  return result;
}

export async function attachActivityToRoutine(
  routineId,
  activityId,
  count,
  duration
) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      activityId: activityId,
      count: count,
      duration: duration,
    }),
  };
  const response = await fetch(
    `${BASE_URL}/routines/${routineId}/activities`,
    options
  );
  const result = await response.json();
  return result;
}

export async function updateRoutineActivity(
  count,
  duration,
  routineActivityId
) {
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      count: count,
      duration: duration,
    }),
  };
  const response = await fetch(
    `${BASE_URL}/routine_activities/${routineActivityId}`,
    options
  );
  const result = await response.json();
  return result;
}

export async function deleteRoutineActivity(routineActivityId, token) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${BASE_URL}/routine_activities/${routineActivityId}`,
    options
  );
  const result = await response.json();
  return result;
}
