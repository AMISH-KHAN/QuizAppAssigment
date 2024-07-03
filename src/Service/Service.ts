
// const Service =async () => {
//     try {
//         const response = await fetch("https://quizapi.io/api/v1/questions?apiKey=j7exgsCWOOR9ya1aW22LHwkoxFFjHspurzsvqhwg&limit=10");
//         if (response.ok) {
//             const quizQuestions = await response.json();
//             console.log(quizQuestions);
//             return quizQuestions;
//         } else {
//             console.error(`Error: ${response.statusText}`);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// export default Service
 const questionList= [
    {
        "id": 598,
        "question": "How can we initiate a session in PHP?",
        "description": null,
        "answers": {
            "answer_a": "$_session_start()",
            "answer_b": "session_start()",
            "answer_c": "$session_start()",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "PHP"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 731,
        "question": "How to compares the current state of the cluster against the state that the cluster would be in if the manifest was applied in Kubernetes?",
        "description": null,
        "answers": {
            "answer_a": "kubectl show -f ./my-manifest.yaml",
            "answer_b": "kubectl log -f ./my-manifest.yaml",
            "answer_c": "kubectl state -f ./my-manifest.yaml",
            "answer_d": "kubectl diff -f ./my-manifest.yaml",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "Linux",
        "difficulty": "Easy"
    },
    {
        "id": 509,
        "question": "<TD> … </TD> tag is used for ________",
        "description": null,
        "answers": {
            "answer_a": "Table heading",
            "answer_b": "none of the above",
            "answer_c": "Table row",
            "answer_d": "Table Records",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 753,
        "question": "How do you write the contents of 3 files into a single file?",
        "description": null,
        "answers": {
            "answer_a": "cat file1 file2 file3 > file",
            "answer_b": "cat file1 > file && cat file2 >> file && cat file3 >> file",
            "answer_c": "cat file1 >> file; cat file2 >> file; cat file3 >> file",
            "answer_d": "cat file1 > file && cat file2 > file && cat file3 > file",
            "answer_e": "cat file1 > file || cat file2 > file || cat file3 > file",
            "answer_f": "cat file1 > file; cat file2 > file; cat file3 > file"
        },
        "multiple_correct_answers": "true",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "true",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "BASH"
            },
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Medium"
    },
    {
        "id": 160,
        "question": "Which HTML element defines navigation links?",
        "description": null,
        "answers": {
            "answer_a": "<nav>",
            "answer_b": "<navigate>",
            "answer_c": "<navigation>",
            "answer_d": "<navlink>",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "",
        "difficulty": "Easy"
    },
    {
        "id": 322,
        "question": "Just installed plugin crashes your Wordpress site with no access to the dashboard. What do you do?",
        "description": null,
        "answers": {
            "answer_a": "Rename the specific plugin folder in /wp-content/plugins",
            "answer_b": "Reinstall Wordpress",
            "answer_c": "Delete all plugins from /wp-content/plugins folder",
            "answer_d": "Reinstall the database",
            "answer_e": "Rename the specific plugin folder in /wp-includes/plugins",
            "answer_f": "Rename the specific plugin folder in /wp-admin/plugins"
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "WordPress"
            }
        ],
        "category": "CMS",
        "difficulty": "Easy"
    },
    {
        "id": 719,
        "question": "The kube-apiserver on Kubernetes master is designed to scale:",
        "description": null,
        "answers": {
            "answer_a": "Vertically",
            "answer_b": "Horizontally",
            "answer_c": "kube-apiserver is not used for scaling",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": "The Kubernetes API server validates and configures data for the api objects which include pods, services, replicationcontrollers, and others. The API Server services REST operations and provides the frontend to the cluster’s shared state through which all other components interact.",
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "Linux",
        "difficulty": "Easy"
    },
    {
        "id": 932,
        "question": "What is the role of cloud controller manager?",
        "description": null,
        "answers": {
            "answer_a": "cloud controller manager is an essential component for persistent storage, the abstraction of cloud-specific code from core Kubernetes code, and network routing.",
            "answer_b": "cloud controller manager is an essential component for local storage, the fraction of cloud-specific code from non core Kubernetes code, and network routing.",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "DevOps",
        "difficulty": "Easy"
    },
    {
        "id": 127,
        "question": "What is the correct HTML for adding a background color?",
        "description": null,
        "answers": {
            "answer_a": "<body bg=\"yellow\">",
            "answer_b": "<background>yellow</background>",
            "answer_c": "<body style=\"background-color:yellow;\">",
            "answer_d": "<body style bg=\"yellow\">",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_c",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "",
        "difficulty": "Easy"
    },
    {
        "id": 686,
        "question": "Which command can be used to write onto other currently logged in user’s console output terminal.",
        "description": null,
        "answers": {
            "answer_a": "notify",
            "answer_b": "alert",
            "answer_c": "write",
            "answer_d": "broadcast",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "BASH"
            },
            {
                "name": "Linux"
            }
        ],
        "category": "Linux",
        "difficulty": "Easy"
    }
]

export default questionList