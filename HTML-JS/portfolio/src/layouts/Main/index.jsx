import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import IMAGES from "@constants/imgUrl";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "@constants/envUrl";
import { CV } from "@constants/url";

import { FishTank, Card, Button, TextField } from "@components/ui";
import { MainStyle } from "@components/styles";

import prjsData from '@data/projects.json'
import drawData from '@data/draw.json'

import tabData from '@utils/tabData'
import schema from '@utils/schema'

import { TypeAnimation } from "react-type-animation";

import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { TabPanel } from '@mui/base/TabPanel';
import { Tabs } from '@mui/base/Tabs';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

import { TextareaAutosizeElement, TextFieldElement, useForm } from "react-hook-form-mui";
import { CircularProgress, Stack } from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";

import emailjs from '@emailjs/browser'

import toast from "react-hot-toast";

import classNames from "classnames/bind";
const cx = classNames.bind(MainStyle);

export default function Content() {
  // handle select tab
  const [activeTab, setActiveTab] = useState(0);
  const getActiveTabStyle = (tabValue) => {
    return activeTab === tabValue
      ? { backgroundColor: 'black', color: 'cyan', borderBottom: '2px solid cyan', outline: 0 }
      : {};
  };
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // handle download CV
  // const onDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = CV;
  //   link.download = 'CV_DinhQuangTuan_Fresher.pdf';
  //   link.click();
  // }

  const txtInputSx = {
    backgroundColor: '#262626',
    '.MuiInputLabel-root': { color: 'cyan' },
    '.MuiInputBase-input': { color: '#fff' },
    '.MuiInputLabel-root.Mui-focused': { color: 'cyan' },
    '.MuiFilledInput-underline:after': { borderBottom: '0' }
  }

  // handle clear all txt inputs
  // const [mailInput, setMailInput] = useState('')
  // const [subjectInput, setSubjectInput] = useState('')
  // const [msgInput, setMsgInput] = useState('')
  // const handleClearAllInputs = () => {
  //   setMailInput('')
  //   setSubjectInput('')
  //   setMsgInput('')
  // }

  // handle send mail
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const formRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const handleSendMail = (data) => {
    if (!formRef.current) return;

    if (data.emailFrom.includes('quangtuan496@gmail.com')) // check own mail
      toast.error("Please enter another email")
    else {
      setIsLoading(true)
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((res) => {
          setIsLoading(false);
          toast.success("Thank you for contacting me and I shall respond soon🫰");
        }, (err) => {
          setIsLoading(false);
          toast.error("Mail is not been sent, please try again")
        })
    }
  };

  // useEffect(() => { // ok
  //   window.addEventListener('scroll', () => {
  //     console.log('scrollY: ', window.scrollY);
  //   });
  // }, [])

  return (
    <FishTank>
      {/* 1st section_introduce */}
      <section className={cx(["fstSection", "w-full grid grid-cols-[auto_35%]"])}>
        {/* left 1st */}
        <div className={cx(["fstLeft", "w-full flex flex-col justify-center items-center gap-5"])}>
          <div className={cx(["hiTxt", "text-[4rem] text-center"])}>
            Hi, I'm
            <span className="text-[cyan] text-[4rem]"> Dinh Quang Tuan </span>
            from Vietnam
          </div>
          <div className="text-3xl">
            I'm a{" "}
            <TypeAnimation
              className={cx(["typeTxt", "italic text-[cyan] text-3xl"])}
              sequence={[
                'web developer',
                2000,
                'mobile developer',
                2000,
                'drawer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
        {/* right 1st */}
        <div className={cx(["fstRight", "w-full flex items-center justify-center"])}>
          <img src={IMAGES.avatar} alt="avatar" />
        </div>
      </section>

      {/* 2nd section_about */}
      <section className={cx(["sndSection", "grid grid-cols-[30%_auto]"])}>
        {/* left 2nd */}
        <div className={cx(["sndLeft", "w-full flex items-center justify-center"])}>
          <img src={IMAGES.dev} alt="dev" />
        </div>
        {/* right 2nd */}
        <div className={cx(["sndRight", "w-full h-fit flex flex-col text-left pl-2 pr-16 gap-5"])}>
          <div className="grid grid-cols-4 h-fit gap-2">
            <div className={cx(["sectionTitle", "col-span-4 text-[cyan] text-[2.5rem]"])}>About me</div>
            <div className="col-span-4 flex flex-col gap-2">
              <div className="flex gap-2">
                <p>I'm current working on{" "}
                  <a className="text-[cyan] hover:text-cyan-500" href="https://github.com/MaiNhatHoangY2001/converse-bot">Learning-English-Gemini-app</a>
                </p>
              </div>
              <p className="text-justify">
                My major is Software Engineering. I'm look forward to finding a fresher full-time job.<br />
                As a graduated student from Industrial University of HCMC, without much experience,
                all I have are passion, responsibility and sincerity.
              </p>
            </div>
          </div>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <TabsList className="flex gap-6 mb-1">
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  value={index}
                  className={cx(["tab", "hover:text-[cyan]"])}
                  style={getActiveTabStyle(index)}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabsList>
            {tabData.map((tab, index) => (
              <TabPanel key={index} value={index} className={cx("tabPanel")}>
                {tab.content}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </section>

      {/* 3rd section_projects */}
      <section className={cx(["trdSection", "pl-6 pr-6 flex flex-col gap-6"])}>
        <div className={cx(["sectionTitle", "text-[cyan] text-[2.5rem]"])}>Projects</div>
        <div className="grid grid-cols-4 gap-6 place-items-center">
          {prjsData.map((item, index) => (
            <Card key={index} prj={item} show={""} showOtherSide={"hidden"} />
          ))}
        </div>
      </section>

      {/* 4th section_contact */}
      <section className={cx(["fourthSection", "mt-[5%] pl-6 pr-6 flex flex-col gap-6"])}>
        <div className={cx(["sectionTitle", "text-[cyan] text-[2.5rem]"])}>Contact</div>
        <div className="grid grid-cols-[30%_auto]">
          {/* left 4th - gmail, phone-number, github, linkedin, cv */}
          <div className={cx(["fourthLeft", "flex flex-col items-center gap-6"])}>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <EmailIcon fontSize="medium" sx={{ color: 'cyan' }} />
                <p className="text-base">quangtuan496@gmail.com</p>
              </div>
              <div className="flex gap-4">
                <PhoneIcon fontSize="medium" sx={{ color: 'cyan' }} />
                <p className="text-base">0944302210</p>
              </div>
              <div className="flex gap-3">
                <Link to="https://github.com/Tuan2210">
                  <GitHubIcon fontSize="large" sx={{ color: 'cyan', ":hover": { color: '#06b6d4 ' } }} />
                </Link>
                <Link to="https://www.linkedin.com/in/tuấn-đinh-091526247">
                  <LinkedInIcon fontSize="large" sx={{ color: 'cyan', ":hover": { color: '#06b6d4 ' } }} />
                </Link>
              </div>
            </div>
            <Button type="button" onClick={() => { }}>Download CV</Button>
          </div>
          {/* right 4th_send email form */}
          <form
            ref={formRef}
            className={cx(["fourthRight", 'mx-auto w-[90%]'])}
            onSubmit={handleSubmit(handleSendMail)}
            noValidate
          >
            <Stack spacing={2}>
              <div className="flex flex-col gap-4">
                {/* email */}
                <TextField
                  name="emailFrom"
                  label="Email"
                  type="email"
                  sx={txtInputSx}
                  // value={mailInput}
                  // onChange={(e) => setMailInput(e.target.value)}
                  control={control}
                />
                {/* subject */}
                <TextField
                  name="subject"
                  label="Subject"
                  type=""
                  sx={txtInputSx}
                  // value={subjectInput}
                  // onChange={(e) => setSubjectInput(e.target.value)}
                  control={control}
                />
                {/* message */}
                <TextareaAutosizeElement
                  name="message"
                  label="Message"
                  resizeStyle="vertical"
                  rows={3}
                  variant="filled"
                  size="small"
                  className="rounded-lg"
                  fullWidth
                  sx={txtInputSx}
                  // value={msgInput}
                  // onChange={(e) => setMsgInput(e.target.value)}
                  control={control}
                />
              </div>
              {/* bottom */}
              {isLoading ? (
                <CircularProgress size={20} sx={{ color: 'cyan' }} />
              ) : (
                // <div className="flex gap-4">
                //   <Button type="submit" endIcon={<SendIcon />}>
                //     Send
                //   </Button>
                //   <Button type="button" onClick={handleClearAllInputs}>Clear all</Button>
                // </div>
                <Button type="submit" endIcon={<SendIcon />}>Send</Button>
              )}
            </Stack>
          </form>
        </div>
      </section>

      {/* 5th section_draw-design */}
      <section className={cx(["fifthSection", "mt-[5%] pl-6 pr-6 flex flex-col gap-6"])}>
        <div className={cx(["sectionTitle", "text-[cyan] text-[2.5rem]"])}>Draw - Design</div>
        <div className="grid grid-cols-4 place-items-center">
          {drawData.map((item, index) => (
            <Card key={index} prj={item} show={"hidden"} showOtherSide={""} />
          ))}
        </div>
      </section>

    </FishTank>
  )
}