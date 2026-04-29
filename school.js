// School Management System - JavaScript

// Page Navigation Functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const role = document.getElementById('userRole').value;
    
    if (role === 'admin') {
        showPage('adminDashboard');
    } else if (role === 'student') {
        showPage('studentDashboard');
    } else if (role === 'teacher') {
        showPage('teacherDashboard');
    }
});

// Signup Form Handler
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const role = document.getElementById('signupRole').value;
    
    if (role === 'student') {
        showPage('studentDashboard');
    } else if (role === 'teacher') {
        showPage('teacherDashboard');
    }
});

// Logout Function
function logout() {
    // Reset forms
    document.getElementById('loginForm').reset();
    document.getElementById('signupForm').reset();
    // Show login page
    showPage('loginPage');
}

// Admin Section Navigation
function showAdminSection(sectionId) {
    // Update nav links
    document.querySelectorAll('#adminDashboard .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Hide all admin sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    // Show selected section
    document.getElementById('admin' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1)).classList.add('active');
}

// Student Section Navigation
function showStudentSection(sectionId) {
    // Update nav links
    document.querySelectorAll('#studentDashboard .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Hide all student sections
    document.querySelectorAll('.student-section').forEach(section => {
        section.classList.remove('active');
    });
    // Show selected section
    document.getElementById('student' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1)).classList.add('active');
}

// Teacher Section Navigation
function showTeacherSection(sectionId) {
    // Update nav links
    document.querySelectorAll('#teacherDashboard .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Hide all teacher sections
    document.querySelectorAll('.teacher-section').forEach(section => {
        section.classList.remove('active');
    });
    // Show selected section
    document.getElementById('teacher' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1)).classList.add('active');
}

// Modal Functions
function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// Edit Student Function
function editStudent() {
    alert('Edit student functionality - would open edit form');
}

// Delete Student Function
function deleteStudent() {
    if (confirm('Are you sure you want to delete this student?')) {
        alert('Student deleted successfully');
    }
}

// Edit Teacher Function
function editTeacher() {
    alert('Edit teacher functionality - would open edit form');
}

// Delete Teacher Function
function deleteTeacher() {
    if (confirm('Are you sure you want to delete this teacher?')) {
        alert('Teacher deleted successfully');
    }
}

// Class Selector for Teacher Dashboard
document.querySelectorAll('.class-selector .btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.class-selector .btn').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Add smooth animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.stat-card, .dashboard-card, .table-container');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Form validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        const inputs = this.querySelectorAll('input[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--danger-color)';
            } else {
                input.style.borderColor = '#e0e0e0';
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all required fields');
        }
    });
});

// Password confirmation for signup
document.getElementById('signupForm').addEventListener('submit', function(e) {
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (password !== confirmPassword) {
        e.preventDefault();
        alert('Passwords do not match!');
    }
});

// Interactive hover effects for tables
document.querySelectorAll('.data-table tbody tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.background = '#f0f7ff';
    });
    row.addEventListener('mouseleave', function() {
        this.style.background = '';
    });
});

// Calendar navigation
document.querySelectorAll('.calendar-header .btn-icon').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Calendar navigation - would change month');
    });
});

// Save buttons feedback
document.querySelectorAll('button[type="submit"], .btn-primary').forEach(btn => {
    if (btn.textContent.includes('Save') || btn.textContent.includes('Add') || btn.textContent.includes('Create')) {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = '✓ Saved!';
            this.style.background = 'var(--success-color)';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
        });
    }
});

console.log('School Management System loaded successfully!');