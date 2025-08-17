import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Send, 
  User, 
  Calendar,
  Clock,
  Search,
  Plus,
  Paperclip
} from "lucide-react";

const messages = [
  {
    id: 1,
    from: "Dr. Michael Chen",
    role: "Cardiologist",
    date: "2024-01-16",
    time: "10:30 AM",
    subject: "Follow-up on your recent visit",
    preview: "I wanted to follow up on your cardiology consultation. Your test results look good...",
    isRead: false,
    isFromDoctor: true,
    fullMessage: "I wanted to follow up on your cardiology consultation from yesterday. Your test results look good, and your blood pressure has improved significantly since starting the Lisinopril. Please continue taking the medication as prescribed and monitor your blood pressure daily. Let me know if you experience any side effects."
  },
  {
    id: 2,
    from: "Sarah Johnson",
    role: "Patient",
    date: "2024-01-15",
    time: "3:45 PM",
    subject: "Question about medication timing",
    preview: "Hi Dr. Chen, I have a question about when to take my blood pressure medication...",
    isRead: true,
    isFromDoctor: false,
    fullMessage: "Hi Dr. Chen, I have a question about when to take my blood pressure medication. Should I take it in the morning or evening? I've been taking it in the morning but wondering if evening would be better for my schedule. Also, is it okay to take it with food?"
  },
  {
    id: 3,
    from: "Dr. Sarah Williams",
    role: "Internal Medicine",
    date: "2024-01-14",
    time: "2:15 PM",
    subject: "Lab results available",
    preview: "Your recent blood work results are now available in your patient portal...",
    isRead: true,
    isFromDoctor: true,
    fullMessage: "Your recent blood work results are now available in your patient portal. Overall, the results look very good. Your cholesterol levels have improved, and your vitamin D levels are now in the normal range. Keep up the good work with your diet and exercise routine. We'll recheck these levels in 3 months."
  },
  {
    id: 4,
    from: "Dr. Emily Rodriguez",
    role: "Psychiatry",
    date: "2024-01-12",
    time: "11:20 AM",
    subject: "Therapy session reminder",
    preview: "Just a friendly reminder about your upcoming therapy session next week...",
    isRead: true,
    isFromDoctor: true,
    fullMessage: "Just a friendly reminder about your upcoming therapy session next week on Thursday at 9:00 AM. We'll continue working on the coping strategies we discussed last time. Please bring your mood tracking journal if you've been keeping one. Looking forward to seeing your progress."
  }
];

export const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState<typeof messages[0] | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const unreadMessages = messages.filter(m => !m.isRead);
  const filteredMessages = messages.filter(m => 
    m.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-primary" />
            Messages
          </h1>
          <p className="text-muted-foreground">Communicate with your healthcare providers</p>
        </div>
        
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Message
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6 text-warning" />
            </div>
            <p className="text-2xl font-bold text-foreground">{unreadMessages.length}</p>
            <p className="text-sm text-muted-foreground">Unread Messages</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="w-6 h-6 text-info" />
            </div>
            <p className="text-2xl font-bold text-foreground">{messages.length}</p>
            <p className="text-sm text-muted-foreground">Total Messages</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <User className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold text-foreground">3</p>
            <p className="text-sm text-muted-foreground">Active Conversations</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-success" />
            </div>
            <p className="text-2xl font-bold text-foreground">&lt; 2h</p>
            <p className="text-sm text-muted-foreground">Avg Response Time</p>
          </CardContent>
        </Card>
      </div>

      {/* Messages Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Conversations</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => setSelectedMessage(message)}
                    className={`p-4 border-b cursor-pointer hover:bg-accent/50 transition-colors ${
                      selectedMessage?.id === message.id ? 'bg-accent/50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                          message.isFromDoctor ? 'bg-primary' : 'bg-secondary'
                        }`}>
                          {message.from.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{message.from}</p>
                          <p className="text-xs text-muted-foreground">{message.role}</p>
                        </div>
                      </div>
                      {!message.isRead && (
                        <Badge variant="secondary" className="bg-warning/10 text-warning text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                    
                    <h4 className="font-medium text-sm mb-1">{message.subject}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{message.preview}</p>
                    
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(message.date).toLocaleDateString()}</span>
                      <Clock className="w-3 h-3" />
                      <span>{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          <Card className="shadow-card h-[600px] flex flex-col">
            {selectedMessage ? (
              <>
                <CardHeader className="border-b">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                      selectedMessage.isFromDoctor ? 'bg-primary' : 'bg-secondary'
                    }`}>
                      {selectedMessage.from.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold">{selectedMessage.from}</h3>
                      <p className="text-sm text-muted-foreground">{selectedMessage.role}</p>
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold mt-2">{selectedMessage.subject}</h2>
                </CardHeader>
                
                <CardContent className="flex-1 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedMessage.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>{selectedMessage.time}</span>
                    </div>
                    
                    <div className="prose prose-sm max-w-none">
                      <p>{selectedMessage.fullMessage}</p>
                    </div>
                  </div>
                </CardContent>
                
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your reply..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button variant="outline" size="icon">
                      <Paperclip className="w-4 h-4" />
                    </Button>
                    <Button onClick={handleSendMessage} className="gap-2">
                      <Send className="w-4 h-4" />
                      Send
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <CardContent className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">Choose a message from the list to view the full conversation</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};