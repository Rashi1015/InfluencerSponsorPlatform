export default {
    template: `
    <div class="login-container">
        <div class="card">
            <div class="card-body">
                <h3 class="text-center mb-4">Register as Sponsor</h3>
                <form @submit.prevent="submitSponsorRegister">
                    <div class="form-group">
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Username" 
                            v-model="username" 
                            required
                        />
                    </div>
                    <div class="form-group">
                        <input 
                            type="email" 
                            class="form-control" 
                            placeholder="Email" 
                            v-model="email" 
                            required
                        />
                    </div>
                    <div class="form-group">
                        <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Password" 
                            v-model="password" 
                            required
                        />
                    </div>
                    <button 
                        class="btn btn-warning btn-block" 
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            username: null,
            password: null,
            email: null,
        };
    },
    methods: {
        async submitSponsorRegister() {
            try {
                const res = await fetch(location.origin + '/register/sponsor', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: this.username,
                        password: this.password,
                        email: this.email,
                    }),
                });

                if (res.ok) {
                    console.log('Sponsor registered successfully');
                    alert('Registration successful! Please log in.');
                    this.$router.push('/login'); // Redirect to login after registration
                } else {
                    const errorText = await res.text();
                    console.error('Failed to register sponsor', errorText);
                    alert('Registration failed. Please try again.');
                }
            } catch (error) {
                console.error('Error during registration:', error);
                alert('An error occurred. Please try again later.');
            }
        },
    },
};
