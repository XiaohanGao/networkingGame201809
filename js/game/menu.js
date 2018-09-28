Background("background_1","backgrounds/background_1.png");
// Your friend in the main menu & outro
N = new Character({ align:"left", background:"#FFF", color:"#000", sound:"text_mid" });

// The player in the main menu & outro
p = new Character({ align:"right", background:"#333", color:"#bbb", sound:"text_low" });

function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","background_1");

	// PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("Hello Hello!");
	N("Are you online?");

	Choose
	({
		"I'm Online.": Play,
		"Offline.":function(message)
		{
			p(message);
			N("Ok I will wait until you have time.");
			Choose({
				"I'm Online.": Play,});
		},
		"Meow,mewo,meow.":function(message)
		{
			p(message);
			N("Meow?");
			p("Meow,Meow,Meow :)");
			N("Meow, LOL.");
			p("Meow, meow, meow, meow, meow...")
			Choose({
				"Meow.": Play,});
		}
	});

}

function SipCoffee(message){
	// PlaySound("sfx","coffee_sip");
	p(message);
}

function Play(message){
	
	SipCoffee(message);
	N("I am in a great, great challenge of my life....");
	N("It's important...absolutely...but I am not confident in the issue...");
	N("I don't think I could handle it independently without you...");
	N("You gonna help me, right? You are my best friend, Sam!");

	Choose({
		"Ok I will help you. But... what's going on indeed?": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("It's my last year in the uni.");
			N("I don't know how to find a job...");
			N("All of my classmates now have got job offers or internships...");
			N("I gonna be a loser!");
			N("What should I do :(");
			Play_2();
		},
		"Just give up.": function(message){
			p(message);
			N("Really?");
			N("Then I will give up hunting for a job.");
			N("I will stay at home, ")
			N("play video games all day, ")
			N("watch stupid TV programmes for day and night, ")
			N("and lose my hope for life. ")
			N("No I don't wanna give up T-T. ");
			Play_2();
		}
	});

}

function Play_2(){

	Choose({
		"What about a job fair?": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("Sounds a good idea.");
			N("However...");
			N("How could I find a job fair?")
			N("I've never heard about it!")
			Play_3();
		},
	});
}

function Play_3(){

	Choose({
		"You can check the UCL career service website. ": function(message){
			$.main_menu_convo_3 = 3;

			p(message);
			p("Here's the link: ")
			p("http://www.ucl.ac.uk/careers/about/what_we_offer/events/careers-fairs")
			N("Cool! That's very helpful!");
			N("Thank you!");
			N("But...but")
			Play_4();
		},
	});
}

function Play_4(){

	Choose({
		"But what?": function(message){
			$.main_menu_convo_4 = 4;

			p(message);
			N("But that's scary...");
			N("I don't have the confidence to attend the fair");
			Play_5();
		},
	});
}

function Play_5(){

	Choose({
		"Don't be under-confident": function(message){
			$.main_menu_convo_5 = 5;

			p(message);
			N("I tried to be confident...however");
			N("I'm terrible at everything.");
			Play_6();
		},
		"Me either. ": function(message){
			p(message);
			N("你长得好看又牛逼");
			N("怎么能不自信");
			Choose({
				"Don't be under-confident": function(message){
					p(message);
					N("I tried to be confident...however");
					N("I'm terrible at everything.");
					Play_6();
				},
			})
		}
	});
}

function Play_6(){

	Choose({
		"You do have your advantage, dear. ": function(message){
			$.main_menu_convo_6 = 6;
			p(message);
			N("Do I? ");
			N("I'm never top students in the uni. ");
			N("Also I'm not the most hardworking one. ");
			N("I'm awkward in sports. ");
			N("I don't have an internship in top companies.");
			N("ohhhh, I'm stupid and lazy.");
			N("And I'm an introvert. ");
			N("An introvert! I'm afraid of talking with people.");
			N("Especially...especially talking with the employers! ");
			N("They must see me as a fool! ");
			Play_7();
		},
		"Yep you are terrible at everything.": function(message){
			p(message);
			N("Your friend commits suicide. "); 
			Choose({
				"Get back in time.": function(message){
					p(message);
					Choose({
						"You do have your advantage, dear. ": function(message){
							p(message);
							N("Do I? ");
							N("I'm never top student in the uni. ");
							N("Also I'm not the most hardworking one. ");
							N("I'm awkward in sports. ");
							N("I don't have an internship in top companies.");
							N("ohhhh, I'm stupid and lazy.");
							N("And I'm an introvert. ");
							N("An introvert! I'm afraid of talking with people.");
							N("Especially...especially talking with the employers! ");
							N("They must see me as a fool! ");
							Play_7();
						},
					})
				}
			})
		}
	});
}

function Play_7(){

	Choose({
		"Come on, they won't. ": function(message){
			$.main_menu_convo_7 = 7;
			p(message);
			N("Gosh...I feel terrible about the job fair ");
			Play_8();
		},
		"Yes they will. ": function(message){
			p(message);
			N("Your friend commits suicide. "); 
			Choose({
				"Get back in time.": function(message){
					p(message);
					Choose({
						"Come on, they won't. ": function(message){
							p(message);
							N("Gosh...I feel terrible about the job fair ");
							Play_8();
						},
					});
				}
			})
		}
	});
}

function Play_8(){

	Choose({
		"An introvert can also perform well in the fair, ": function(message){
			$.main_menu_convo_8 = 8;
			p(message);
			p("as long as he prepares well.")
			N("Really? ");
			Play_9();
		},
		"An introvert will absolutely fail in the fair. ": function(message){
			p(message);
			N("Your friend commits suicide. "); 
			Choose({
				"Get back in time.": function(message){
					p(message);
					Choose({
						"An introvert can also perform well in the fair, ": function(message){
							p(message);
							p("as long as he prepares well.")
							N("Really? ");
							Play_9();
						},
					})
				}
			})
		}
	});
}

function Play_9(){

	Choose({
		"I can help you. ": function(message){
			$.main_menu_convo_9 = 9;

			p(message);
			N("Thanks god! I know you will! ");
			N("You are my best friend and expert in networking! ")
			N("So...what should I do tomorrow?")
			N("Do I need to buy a new suit right now?")

			Play_10();
		},
	});
}

function Play_10(){

	Choose({
		"Not necessary. ": function(message){
			$.main_menu_convo_10 = 10;

			p(message);
			p("Neatly dressed would be fine.")
			N("Emmm..ok ");
			N("I will dress on my new shirt. ")
			N("I think I would look more handsome in it. ")
			N("So...what should I prepare for the fair? ")
			Play_11();
		},
		"You should dress as a Lolita. ": function(message){
			p(message);
			N("Your friend commits suicide. ");
			Choose({
				"Get back in time. ": function(message){
					p(message);
					Choose({
						"Not necessary. ": function(message){
						p(message);
						p("Neatly dressed would be fine.")
						N("Emmm..ok ");
						N("I will dress on my new shirt. ")
						N("I think I would look more handsome in it. ")
						N("So...what should I prepare for the fair? ")
						Play_11();
					},
				})
				}
			})
		}
	});
}

function Play_11(){

	Choose({
		"First, You would need a CV. ": function(message){
			$.main_menu_convo_11 = 11;
			p(message);
			p("The CV will be the means by which an employer gets to know you.");
			p("It's your passport to a first meeting with that employer on a career fair.");
			N("Cool! I can't wait to get my own CV! ");
			p("There are six steps for creating a CV.");
			p("The first step is, ");
			Play_12();
		},
	});
}

function Play_12(){
	Choose({
		"Turn on the computer. ": function(message){
			p(message);
			N("I'm not that fool, Sam...");
			Choose({
				"Identify what employer is looking for. ": function(message){
					$.main_menu_convo_12 = 12;
					p("Identify the specific skills and experience that the employer is looking for. ");
					N("Emmm...more specific please? ");
					p("These are the job requirements, ");
					p("The criteria against which your CV will be assessed, ");
					p("and will be listed on the job advert, ");
					p("job description, ");
					p("or person specification. ");
					Play_13();
				}
			})
		},
		"Identify what the employer is looking for. ": function(message){
			$.main_menu_convo_12 = 12;
			p("Identify the specific skills and experience that the employer is looking for. ");
			N("Emmm...more specific please? ");
			p("These are the job requirements, ");
			p("the criteria against which your CV will be assessed, ");
			p("and will be listed on the job advert, ");
			p("job description, ");
			p("or person specification. ");
			N("Okay...that make sense. ");
			N("Wait...do you know what companies will turn up in the career fair? ")
			Play_13();
		},
	})
	
}

function Play_13(){
	Choose({
		"Try checking the Event Resources on the job fair web page.": function(message){
			$.main_menu_convo_13 = 13;
			p(message);
			N("How smart you are! ");
			N("Yep I followed your instruction, ");
			N("and have found a stand plan of the companies and organisations that would attend the fair tomorrow. ");
			N("I wish I could know more about these companies :(");
			Play_14();
		},
	})

}

function Play_14(){
	Choose({
		"Ask your friends. ": function(message){
			p(message);
			N("I don't have other friends, Sam :(");
			Choose({
				"Try researching them online. ": function(message){
					p(message);
					N("Good idea.");
					N("Hi, I have googled the companies' name and got some basic information. ");
					N("I think I am quite interested in some of them. ");
					Play_15();
				},
			})
		},
		"Try researching them online. ": function(message){
			p(message);
			N("Good idea.");
			N("Hi, I have googled the companies' name and got some basic information. ");
			N("I think I am quite interested in some of them. ");
			Play_15();
		},
	})
}

function Play_15(){
	Choose({
		"List the interested ones and look at their job vacancies online. ": function(message){
			p(message);
			N("That's what I'm about to do.");
			N("I have listed five companies. ");
			N("I do believe I need to know more about them. "); 
			p("Always read the job descriptions, ");
			p("as job titles can often be interchangeable and misleading. ");
			N("That's helpful. ");
			N("Now I know more about the companies and requirements of their jobs.");
			p("The second step is, ");
			Play_16();
		},
	})
}

function Play_16(){
	Choose({
		"Take a rest. ": function(message){
			p(message);
			N("Great that's exactly what I'm thinking about. ");
			N("Zzzzzzzz....");
			N("Zzzzzzzz....");
			N("Zzzzzzzz....");
			N("Zzzzzzzz....");
			N("Zzzzzzzz....");
			N("Zzzzzzzz....");
			N("I have missed the career fair!");
			N("Nooooooo!");
			Choose({
				"Get back in time. ": function(message){
					p(message);
					Choose({
						"Think of yourself. ": function(message){
							p(message);
							N("Myself? ");
							p("Think of examples from your work, internships, volunteering, study, interests, travel or home life that prove you have these job requirements. ");
							N("I'm not sure whether I have the requirements..."); 
							p("Two exercises could help you know yourself better.");
							Play_17();
						}
					})

				}
			})
		},
		"Think of yourself. ": function(message){
			p(message);
			N("Myself? ");
			p("Think of examples from your work, internships, volunteering, study, interests, travel or home life that prove you have these job requirements. ");
			N("I'm not sure whether I have the requirements..."); 
			p("Two exercises could help you know yourself better.");
			Play_17();
		}
	})
}

function Play_17(){
	
}