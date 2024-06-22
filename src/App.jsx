import React, { useState } from 'react';
import useFormValidation from './Hooks/UseFormValidation.jsx';
import validate from './utils/validate';
import RadioFormField from './components/RadioFormField';
import FormFields from './components/FormFields.jsx';
import CheckboxGroup from './components/CheckboxGroup';
import AdminSummary from './components/Summary';
import Button from './components/Button.jsx';
import SelectOptn from './components/SelectOptn.jsx';
import { Icon } from '@iconify/react/dist/iconify.js';

const JobApplicationForm = () => {
  const initialState = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    experience: '',
    portfolio: '',
    managementExperience: '',
    additionalSkills: [],
    interviewTime: '',
  };

  const { formData, errors, handleChange, handleSubmit } = useFormValidation(initialState, validate);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  const skillsOptions = ['JavaScript', 'CSS', 'Python', 'React', 'Node.js', 'Django'];

  return (
    <div className='w-full h-full flex flex-col sm:flex-row bg-blue-50 p-3'>

    <div className="w-full sm:w-3/4 flex h-full flex-col items-center justify-center">
      <h1 className='text-4xl font-extrabold font-mono text-blue-600'>
      {
        !isSubmitted ? "Job Application Form" : "Application Summary"
      }
      
    </h1>
      {!isSubmitted ? (
        <form className='w-full' onSubmit={(e) => handleSubmit(e, submitForm)}>
          <div className='flex flex-col sm:flex-row w-full justify-evenly'>
          <div>
          <FormFields 
            fieldName={"Name"}
            type={"text"}
            name={"fullName"}
            onChange={handleChange}
            error={errors.fullName}
            placeholder={"Your full name..."}
            icon={"icon-park-solid:edit-name"}
          />
          <FormFields 
            fieldName={"Email"}
            type={"email"}
            name={"email"}
            onChange={handleChange}
            error={errors.email}
            placeholder={"Your email..."}
            icon={"ic:baseline-email"}
          />
          <FormFields 
            fieldName={"Phone Number"}
            type={"text"}
            name={"phoneNumber"}
            onChange={handleChange}
            error={errors.phoneNumber}
            placeholder={"Your phone number..."}
            icon={"gg:phone"}
          />

          <SelectOptn 
            fieldName={"Applying for Position"}
            value={formData.position}
            name={"position"}
            onChange={handleChange}
            error={errors.position}
            icon={"gis:position-man"}
            optns={["Developer", "Designer", "Manager"]}
          />

          {['Developer', 'Designer'].includes(formData.position) && (
            <FormFields
              fieldName="Relevant Experience (Years)"
              name="experience"
              type="number"
              value={formData.experience}
              onChange={handleChange}
              error={errors.experience}
              placeholder={"Your relevant experience..."}
              icon={"fa-solid:business-time"}
            />
          )}

          {formData.position === 'Designer' && (
            <FormFields
              fieldName="Portfolio URL"
              name="portfolio"
              type="text"
              value={formData.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
              placeholder={"Your portfolio Url..."}
              icon={"fluent-mdl2:website"}
            />
          )}

          {formData.position === 'Manager' && (
            <FormFields
              fieldName="Management Experience"
              name="managementExperience"
              type="text"
              value={formData.managementExperience}
              onChange={handleChange}
              error={errors.managementExperience}
              placeholder={"Your management experience..."}
              icon={"fa-solid:business-time"}
            />
          )}

</div>
<div>
          <CheckboxGroup
            label="Additional Skills"
            name="additionalSkills"
            options={skillsOptions}
            selectedOptions={formData.additionalSkills}
            onChange={handleChange}
          />
          {errors.additionalSkills && <span className="text-red-500 text-sm font-bold">{errors.additionalSkills}</span>}

          <div className="m-1 p-1">
            <label className="text-lg">Preferred Interview Time:</label>
            <div className='flex justify-evenly space-x-1'>
            <Icon icon={"marketeq:date-alt-check"} width={36} className='rounded-full'/>
            <input
              type="datetime-local"
              name="interviewTime"
              value={formData.interviewTime}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md size-9 p-2 w-3/4"
            />

            </div>
            {errors.interviewTime && <span className="text-red-500 text-sm font-bold">{errors.interviewTime}</span>}
          </div>

            </div>
            </div>
          <div className='flex justify-center items-center m-2'>
      <Button
       type={"submit"}
      >
        Submit
      </Button>

      </div>
        </form>
      ) : (
        <AdminSummary formData={formData} />
      )}
    </div>

    <div className="w-full sm:w-1/2 flex flex-col justify-evenly sm:min-h-screen items-center">
      <img src="https://factohr-1a56a.kxcdn.com/wp-content/themes/factohr-theme/images/blog/top-job-portal/1-Top-job-portals-in-India.png" alt="img"/>
    </div>

    </div>
  );
};

export default JobApplicationForm;
