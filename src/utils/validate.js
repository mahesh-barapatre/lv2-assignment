const validate = (formData) => {
    let formErrors = {};
  
    if (!formData.fullName) formErrors.fullName = 'Full Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.phoneNumber) {
      formErrors.phoneNumber = 'Phone Number is required';
    } else if (isNaN(formData.phoneNumber)) {
      formErrors.phoneNumber = 'Phone Number must be a valid number';
    }
    if ((formData.position === 'Developer' || formData.position === 'Designer') && !formData.experience) {
      formErrors.experience = 'Relevant Experience is required';
    } else if (isNaN(formData.experience) || formData.experience <= 0) {
      formErrors.experience = 'Relevant Experience must be a number greater than 0';
    }
    if (formData.position === 'Designer' && !formData.portfolio) {
      formErrors.portfolio = 'Portfolio URL is required';
    } else if (formData.position === 'Designer' && !/^https?:\/\/\S+$/.test(formData.portfolio)) {
      formErrors.portfolio = 'Portfolio URL must be a valid URL';
    }
    if (formData.position === 'Manager' && !formData.managementExperience) {
      formErrors.managementExperience = 'Management Experience is required';
    }
    if (!formData.additionalSkills || formData.additionalSkills.length === 0) {
      formErrors.additionalSkills = 'At least one skill must be selected';
    }
    if (!formData.interviewTime) {
      formErrors.interviewTime = 'Preferred Interview Time is required';
    }
  
    return formErrors;
  };
  
  export default validate;
  