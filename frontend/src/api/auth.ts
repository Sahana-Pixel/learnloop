import axios, { AxiosError } from "axios";

const API_BASE_URL = "http://localhost:3000";

// data you're sending to the backend during registration.
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role: "student" | "mentor";
}

// data you're getting back from the backend.
export interface RegisterResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: "student" | "mentor";
    // Add more fields if your backend returns more
  };
}

export const registerUser = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${API_BASE_URL}/user/signup`,
      payload
    );
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data.message || "Registration failed");
  }
};


export interface LoginPayload {
  email: string;
  password: string;
  role: "student" | "mentor";
}


export const loginUser = async (payload: LoginPayload) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, payload);
  return response.data;
};

